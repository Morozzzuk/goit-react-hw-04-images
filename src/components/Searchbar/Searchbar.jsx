import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchForm,
  Input,
  SearchFormBtn,
  SearchIcon,
  Wrapper,
} from './Searchbar.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string().trim(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    // если пустая строка, выводим сообщение
    if (values.query === '') {
      toast.info("Sorry, the search string can't be empty. Please try again.");
      return;
    }

    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <SearchForm>
        <Wrapper>
          <SearchFormBtn type="submit">
            <SearchIcon />
          </SearchFormBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Wrapper>
      </SearchForm>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// import { HiMagnifyingGlass } from 'react-icons/hi2';
// import {
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
//   SearchbarHeader,
// } from './Searchbar.styled';

// export default function Searchbar() {
//   return (
//     <SearchbarHeader className="searchbar">
//       <SearchForm className="form">
//         <SearchFormButton type="submit" class="button">
//           <HiMagnifyingGlass size="24" fill="black" />
//           <SearchFormButtonLabel className="button-label">
//             Search
//           </SearchFormButtonLabel>
//         </SearchFormButton>

//         <SearchFormInput
//           className="input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </SearchForm>
//     </SearchbarHeader>
//   );
// }
