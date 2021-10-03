import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input
} from '@chakra-ui/react';
import * as LogService from '../../services/api.logs';

function LogCreateForm() {

    /*function validateName(value) {
        let error
        if (!value) {
            error = "Title is required"
        }
        return error
    }

    return (
        <Formik
            initialValues={{ title: "Untitled" }}
            onSubmit={(values, actions) => {
                LogService.postNewLog()
                actions.setSubmitting(false)
            }}
        >
        {(props) => (
            <Form>
            <Field name="title" validate={validateName}>
                {({ field, form }) => (
                <FormControl isInvalid={form.errors.title && form.touched.title}>
                    <FormLabel htmlFor="title">Log Title</FormLabel>
                    <Input {...field} id="title" placeholder="title" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
                )}
            </Field>
            <Button
                mt={4}
                bgColor="brand.accent2"
                isLoading={props.isSubmitting}
                type="submit"
            >
                Submit
            </Button>
            </Form>
        )}
        </Formik>
    )*/
}

export default LogCreateForm;