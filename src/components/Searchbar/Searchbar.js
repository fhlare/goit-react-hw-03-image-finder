import { Formik } from "formik";
import { Field, Form, SearchButtonLabel, SearchFormButton, SearchbarForm } from "./Searchbar.style";

export const Searchbar = ({ onSearch }) => {
  return (

    <Formik 
      initialValues={{
        text: '',
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onSearch(values);
        console.log(values);
      }}>
      <SearchbarForm>
        <Form>
          <SearchFormButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchFormButton>
          <Field name="text" type="text" placeholder="Search images and photos"/>
        </Form>
      </SearchbarForm>
    </Formik>
  );
};
