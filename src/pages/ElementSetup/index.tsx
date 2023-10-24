/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Breadcrumb,
  Modal,
  CustomInput,
  CustomRadio,
  CustomSelect,
  CustomSwitch,
} from "../../components";
import DataTable from "../../components/table";
// eslint-disable-next-line import/no-absolute-path
import FILTER_ICON from "/icons/filter.svg";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { getAllElements } from "../../rtk/slices/elementSlices/actions";
import styles from "./elementsetup.module.scss";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  classification: yup.string().required("Classification is required"),
  category: yup.string().required("Category is required"),
  payrun: yup.string().required("Payrun is required"),
  description: yup.string().required("Description is required"),
  reportingName: yup.string().required("Reporting Name is required"),
});

type FormData = {
  name: string;
  classification: string;
  category: string;
  payrun: string;
  description: string;
  reportingName: string;
};

const options = ["Jan", "Feb", "Mar", "Apr"];

const ElementSetup: React.FC = () => {
  const {
    getAllElements: { data: AllElements },
  } = useAppSelector((state) => state.elements);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState("Opened");
  const [payType, setPayType] = React.useState("Monthly");
  const [prorate, setProrate] = React.useState("Yes");
  const [tabValue, setTabValue] = React.useState("element_details");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const dispatch = useAppDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };
  const handlePayChange = (value: string) => {
    setPayType(value);
  };
  const handleProrateChange = (value: string) => {
    setProrate(value);
  };
  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const breadcrumbItems = [
    { label: "Payroll Management", url: "/payroll-management" },
    { label: "Element Setup", url: "/element" },
    { label: "Elements", url: "#" },
  ];

  const initialData: FormData = {
    name: "",
    classification: "",
    category: "",
    payrun: "",
    description: "",
    reportingName: "",
  };

  const onSubmit: (data: FormData) => void = async () => {
    setTabValue("additional_details");
  };

  const handleCancel = () => {
    reset(initialData);
    closeModal();
  };

  const handleGoBack = () => {
    setTabValue("element_details");
  };

  React.useEffect(() => {
    const fetchData = () => dispatch(getAllElements());

    fetchData();
  }, [dispatch]);

  return (
    <div className={styles.element_container}>
      <Breadcrumb items={breadcrumbItems} />

      <div className={styles.element_main_content}>
        <h4>Elements</h4>

        <div className={styles.element_options}>
          <div className={styles.left}>
            <div className={styles.search_container}>
              <input type="text" placeholder="Search for elements..." />
              <div className={styles.search_icon_container}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>

            <img src={FILTER_ICON} alt="filter_image" />
          </div>
          <div className={styles.right}>
            <button type="button" onClick={openModal}>
              Create Element{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className={styles.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* @ts-ignore */}
        {AllElements && AllElements?.data?.content.length > 0 && (
          <div
            style={{
              width: "100%",
            }}
          >
            {/* @ts-ignore */}
            <DataTable data={AllElements?.data?.content} />
          </div>
        )}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.modal_content}>
            <h3>Create Element</h3>

            <div className={styles.wrapper}>
              <div className={styles.wrapper_contents}>
                <div className={styles.wrapper_content_top}>
                  <div className={styles.wrapper_content_top1} />
                  <div className={styles.wrapper_content_top2}>
                    Element Details
                  </div>
                  <div className={styles.wrapper_content_top3} />
                  <div className={styles.wrapper_content_top4}>
                    Additional Details
                  </div>
                  <div className={styles.wrapper_content_top5} />
                </div>
                <div className={styles.wrapper_content_bottom}>
                  <div className={styles.wrapper_content_bottom_styles} />
                  <div className={styles.indicator}>
                    {tabValue === "element_details" ? 1 : "✓"}
                  </div>
                  <div
                    className={
                      tabValue === "element_details"
                        ? styles.wrapper_content_bottom_styles_right
                        : styles.wrapper_content_bottom_styles
                    }
                  />
                  <div
                    className={
                      tabValue === "element_details"
                        ? styles.indicator2
                        : styles.indicator
                    }
                  >
                    2
                  </div>
                  <div
                    className={styles.wrapper_content_bottom_styles_rightx}
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {tabValue === "element_details" ? (
                <div className={styles.input_fields}>
                  <div className={styles.row}>
                    <div className={styles.single_input}>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Name"
                            type="text"
                            placeholder="Input Name"
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.name && (
                        <div className={styles.form_error}>
                          <p className="error">{errors.name.message}</p>
                        </div>
                      )}
                    </div>

                    <div className={styles.single_input}>
                      <Controller
                        name="classification"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Classification is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Element Classification"
                            type="select"
                            placeholder="Select Classification"
                            options={["Select Classification", "Other Options"]}
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.classification && (
                        <div className={styles.form_error}>
                          <p className="error">
                            {errors.classification.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.single_input}>
                      <Controller
                        name="category"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Category is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Element Category"
                            type="select"
                            placeholder="Select Element Category"
                            options={[
                              "Select Element Category",
                              "Other Options",
                            ]}
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.category && (
                        <div className={styles.form_error}>
                          <p className="error">{errors.category.message}</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.single_input}>
                      <Controller
                        name="payrun"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Payrun is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Select Payrun"
                            type="select"
                            placeholder="Select Payrun"
                            options={["Select Payrun", "Other Options"]}
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.payrun && (
                        <div className={styles.form_error}>
                          <p className="error">{errors.payrun.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.textarea_row}>
                    <Controller
                      name="description"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Description is required" }}
                      render={({ field }) => (
                        <CustomInput
                          label="Description"
                          type="textarea"
                          placeholder="Input Description"
                          value={field.value}
                          onInputChange={field.onChange}
                        />
                      )}
                    />
                    {errors.description && (
                      <div className={styles.form_error}>
                        <p className="error">{errors.description.message}</p>
                      </div>
                    )}
                  </div>
                  <div className={styles.textarea_row}>
                    <Controller
                      name="reportingName"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Reporting Name is required" }}
                      render={({ field }) => (
                        <CustomInput
                          label="Reporting Name"
                          type="textarea"
                          placeholder="Input Reporting Name"
                          value={field.value}
                          onInputChange={field.onChange}
                        />
                      )}
                    />
                    {errors.reportingName && (
                      <div className={styles.form_error}>
                        <p className="error">{errors.reportingName.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.input_fields}>
                  <div className={styles.row}>
                    <div className={styles.single_input}>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Effective Start Date"
                            type="date"
                            placeholder="Select Date"
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.name && (
                        <div className={styles.form_error}>
                          <p className="error">{errors.name.message}</p>
                        </div>
                      )}
                    </div>

                    <div className={styles.single_input}>
                      <Controller
                        name="classification"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Classification is required" }}
                        render={({ field }) => (
                          <CustomInput
                            label="Effective End Date"
                            type="date"
                            placeholder="Select Date"
                            value={field.value}
                            onInputChange={field.onChange}
                          />
                        )}
                      />
                      {errors.classification && (
                        <div className={styles.form_error}>
                          <p className="error">
                            {errors.classification.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.single_input}>
                      <CustomRadio
                        label="Processing Type"
                        name="processing_type"
                        options={[
                          { value: "Opened", label: "Opened" },
                          { value: "Closed", label: "Closed" },
                        ]}
                        selectedValue={selectedStatus}
                        onRadioChange={handleStatusChange}
                      />
                    </div>

                    <div className={styles.single_input}>
                      <CustomRadio
                        label="Pay Frequency"
                        name="pay_frequency"
                        options={[
                          { value: "Monthly", label: "Monthly" },
                          { value: "Selected", label: "Selected Month" },
                        ]}
                        selectedValue={payType}
                        onRadioChange={handlePayChange}
                      />
                    </div>
                  </div>

                  <div className={styles.row_full}>
                    <CustomSelect
                      label="Selected Pay Month"
                      options={options}
                      disabled={payType === "Monthly" && true}
                    />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.single_input}>
                      <CustomRadio
                        label="Prorate"
                        name="prorate"
                        options={[
                          { value: "Yes", label: "Yes" },
                          { value: "No", label: "No" },
                        ]}
                        selectedValue={prorate}
                        onRadioChange={handleProrateChange}
                      />
                    </div>

                    <div className={styles.single_input}>
                      <CustomSwitch
                        label="Status"
                        checked={isSwitchOn}
                        onChange={handleSwitchToggle}
                      />
                    </div>
                  </div>
                </div>
              )}
              {tabValue === "element_details" ? (
                <div className={styles.button_container}>
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button type="submit">Next</button>
                </div>
              ) : (
                <div className={styles.button_container}>
                  <button type="button" onClick={handleGoBack}>
                    Back
                  </button>
                  <button type="submit">Create New Element</button>
                </div>
              )}
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ElementSetup;
