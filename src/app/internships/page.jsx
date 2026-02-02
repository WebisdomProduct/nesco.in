"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Card,
  Row,
  Col,
  Spin,
} from "antd"; // Added Spin
import { InboxOutlined } from "@ant-design/icons";
import Image from "next/image";
import img from "@/assests/internships/intern.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import usePostQuery from "@/hooks/postQuery.hook";
import { apiUrls } from "@/apis";
import { toast, ToastContainer } from "react-toastify"; // Added ToastContainer

const InternshipForm = () => {
  const [form] = Form.useForm();
  const [activeSlide, setActiveSlide] = useState(0);
  const { postQuery } = usePostQuery();
  const [loading, setLoading] = useState(false); // Added loading state

  const handleDocumentUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      // console.log(reader);
      reader.onloadend = () => {
        const base64String = reader.result;
        // console.log(base64String);
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // const handleFinish = (values) => {
  //   console.log("Form values:", values);
  //   message.success("Application submitted successfully!");
  //   form.resetFields(); // Reset form after submission
  // };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  const onSubmit = async (data) => {
    console.log("Form Submission Triggered! Data:", data);
    setLoading(true); // Start loader
    try {
      const file = data.resume?.[0]?.originFileObj;
      if (!file) {
        toast.error("Please select a PDF file");
        setLoading(false); // Stop loader
        return;
      }

      const base64String = await handleDocumentUpload(file);

      postQuery({
        url: apiUrls?.upload?.uploadDocument,
        postData: { base64String },
        onSuccess: (response) => {
          postQuery({
            url: `${apiUrls?.internship}/`,
            postData: {
              name: data?.fullName,
              email: data?.email,
              mobile: data?.phone,
              university: data?.university,
              degree: data?.degree,
              expected_year: data?.graduationYear,
              resumeFile: response?.data,
            },
            onSuccess: () => {
              toast.success("Details send");
              form.resetFields(); // Reset form after submission
              setLoading(false); // Stop loader
              // navigate("/announcement/list");
            },
            onFail: () => {
              toast.error("Failed to create document");
              setLoading(false); // Stop loader
            },
          });
        },
        onFail: () => {
          toast.error("Document upload failed");
          setLoading(false); // Stop loader
        },
      });
    } catch (error) {
      toast.error("Error processing file");
      setLoading(false); // Stop loader
    }
  };

  return (
    <>
      <Navbar activeSlide={activeSlide} />
      <ToastContainer /> {/* Added ToastContainer */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:py-10 header_purple">
          <Card
            className="w-full md:w-[1400px] bg-white rounded-xl overflow-hidden lg:mt-[7vh]"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Image
                  src={img}
                  alt="Internship"
                  width={700}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
                  Internship Application
                </h2>
                <Form
                  form={form}
                  name="internship_form"
                  layout="vertical"
                  onFinish={onSubmit}
                  onFinishFailed={handleFinishFailed}
                >
                  <Row gutter={[24, 24]}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Full Name"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your full name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your full name"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email Address"
                      name="email"
                      rules={[
                        { type: "email", message: "Invalid email address" },
                        { required: true, message: "Please enter your email" },
                      ]}
                    >
                      <Input placeholder="Enter your email" className="p-2" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your phone number",
                        },
                        {
                          pattern: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your phone number"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="University"
                      name="university"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your university",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your university"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Degree"
                      name="degree"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your degree",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your degree" className="p-2" />
                    </Form.Item>
                  </Col>

                  {/* Expected Graduation Year */}
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Expected Graduation Year"
                      name="graduationYear"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your expected graduation year",
                        },
                        {
                          pattern: /^[0-9]{4}$/,
                          message: "Invalid year format (e.g., 2025)",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter expected graduation year"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24}>
                    <Form.Item
                      label="Upload Resume"
                      name="resume"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      rules={[
                        {
                          required: true,
                          message: "Please upload your resume",
                        },
                      ]}
                    >
                      <Upload.Dragger name="files" beforeUpload={() => false}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Only PDF, DOCX, or TXT files are allowed.
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Col>

                  <Col xs={24}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600"
                        disabled={loading} // Disable button while loading
                      >
                        {loading ? <Spin /> : "Submit Application"}{" "}
                        {/* Show loader */}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default InternshipForm;
