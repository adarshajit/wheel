import React from "react";

import { Button, Input, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import * as yup from "yup";

import notesApi from "apis/notes";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input
            label="Title*"
            name="title"
            className="mb-6"
            placeholder="Enter Title"
          />
          <Input
            label="Description*"
            name="description"
            className="mb-6"
            placeholder="Enter Description"
          />

          <div className="mb-6">
            <Select
              isClearable
              isSearchable
              label="Assigned Contact*"
              name="ValueList"
              options={[
                {
                  label: "Oliver Smith",
                  value: "value1"
                },
                {
                  label: "Kieren Miller",
                  value: "value2"
                },
                {
                  label: "Tony Khan",
                  value: "value3"
                }
              ]}
              placeholder="Select Role"
            />
          </div>

          <div className="mb-6">
            <Select
              isMulti
              label="Tags*"
              name="ValueList"
              options={[
                {
                  label: "Getting Started",
                  value: "value1"
                },
                {
                  label: "Onboarding",
                  value: "value2"
                },
                {
                  label: "User Flow",
                  value: "value3"
                },
                {
                  label: "UX",
                  value: "value4"
                },
                {
                  label: "Bugs",
                  value: "value5"
                },
                {
                  label: "V2",
                  value: "value5"
                }
              ]}
              placeholder="Select Role"
            />
          </div>

          <div className="flex justify-start nui-pane__footer nui-pane__footer--absolute">
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="ml-2"
              disabled={isSubmitting}
              loading={isSubmitting}
            />

            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="none"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
