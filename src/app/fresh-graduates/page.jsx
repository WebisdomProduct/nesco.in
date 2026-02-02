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
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Image from "next/image";
import img from "@/assests/internships/intern1.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import { apiUrls } from "@/apis";
import usePostQuery from "@/hooks/postQuery.hook";
import { toast, ToastContainer } from "react-toastify";

const GraduateForm = () => {
  const [form] = Form.useForm();
  const [activeSlide, setActiveSlide] = useState(0);
  const { postQuery } = usePostQuery();
  const [loading, setLoading] = useState(false);

  const handleDocumentUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  const onSubmit = async (data) => {
    console.log("Form Submission Triggered! Data:", data);
    setLoading(true);
    try {
      const file = data.resume?.[0]?.originFileObj;
      if (!file) {
        toast.error("Please select a PDF file");
        setLoading(false);
        return;
      }

      const base64String = await handleDocumentUpload(file);

      postQuery({
        url: apiUrls?.upload?.uploadDocument,
        postData: { base64String },
        onSuccess: (response) => {
          postQuery({
            url: `${apiUrls?.graduates}/`,
            postData: {
              name: data?.fullName,
              email: data?.email,
              mobile: data?.phone,
              graduation_year: data?.graduation_year,
              degree: data?.degree,
              job_role: data?.jobRole,
              resumeFile: response?.data,
            },
            onSuccess: () => {
              toast.success("Details send");
              form.resetFields();
              setLoading(false);
            },
            onFail: () => {
              toast.error("Failed to create document");
              setLoading(false);
            },
          });
        },
        onFail: () => {
          toast.error("Document upload failed");
          setLoading(false);
        },
      });
    } catch (error) {
      toast.error("Error processing file");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar activeSlide={activeSlide} />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:py-10 header_purple">
          <Card
            className="w-full md:w-[1400px] bg-white rounded-xl overflow-hidden lg:mt-[7vh]"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Image
                  src={img}
                  alt="Graduate"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-full md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
                  Fresh Graduate Application
                </h2>
                <Form
                  form={form}
                  name="graduate_form"
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
                      label="Degree"
                      name="degree"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your degree",
                        },
                      ]}
                    >
                      <Input
                        placeholder="e.g., B.Tech in CSE"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Graduation Year"
                      name="graduation_year"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your graduation year",
                        },
                      ]}
                    >
                      <Input placeholder="e.g., 2025" className="p-2" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Preferred Job Role"
                      name="jobRole"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your preferred job role",
                        },
                      ]}
                    >
                      <Input
                        placeholder="e.g., Sales & Marketing"
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
                        disabled={loading}
                      >
                        {loading ? <Spin /> : "Submit Application"}
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

export default GraduateForm;
