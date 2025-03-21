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
import img from "@/assests/internships/experience.jpeg";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";
import usePostQuery from "@/hooks/postQuery.hook";
import { apiUrls } from "@/apis";
import { toast, ToastContainer } from "react-toastify"; // Added ToastContainer

const ExperiencedForm = () => {
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
            url: `${apiUrls?.experience}/`,
            postData: {
              name: data?.fullName,
              email: data?.email,
              mobile: data?.phone,
              current_company: data?.current_company,
              total_experienced: data?.experience,
              job_title: data?.job_title,
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
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 header_purple">
        <Card
          className="w-full md:w-[1400px] bg-white rounded-xl overflow-hidden lg:mt-[7vh]"
          bodyStyle={{ padding: 0 }}
        >
          <div className="flex flex-col md:flex-row ">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={img}
                alt="Experienced Candidate"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-700">
                Experienced Candidate Application
              </h2>

              <h3 className="text-lg font-branding-semibold mb-6 text-center">
                Vacancy : 100
              </h3>

              <Form
                form={form}
                name="experienced_form"
                layout="vertical"
                onFinish={onSubmit}
                onFinishFailed={handleFinishFailed}
              >
                <Row gutter={[24, 24]}>
                  {/* Full Name */}
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
                      <Input placeholder="Enter your full name" />
                    </Form.Item>
                  </Col>

                  {/* Email Address */}
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email Address"
                      name="email"
                      rules={[
                        { type: "email", message: "Invalid email address" },
                        { required: true, message: "Please enter your email" },
                      ]}
                    >
                      <Input placeholder="Enter your email" />
                    </Form.Item>
                  </Col>

                  {/* Phone Number */}
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
                      <Input placeholder="Enter your phone number" />
                    </Form.Item>
                  </Col>

                  {/* Total Experience (in years) */}
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Total Experience (in years)"
                      name="experience"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your total experience",
                        },
                        {
                          pattern: /^[0-9]+$/,
                          message: "Experience should be a number",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your total experience (e.g., 5)" />
                    </Form.Item>
                  </Col>

                  {/* Current/Most Recent Job Title & Company */}
                  <Col xs={24}>
                    <Form.Item
                      label="Current Company"
                      name="current_company"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your company name",
                        },
                      ]}
                    >
                      <Input placeholder="e.g., Nesco" />
                    </Form.Item>
                  </Col>

                  <Col xs={24}>
                    <Form.Item
                      label="Current/Most Recent Job Title"
                      name="job_title"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your job title",
                        },
                      ]}
                    >
                      <Input placeholder="e.g., Sales & Marketing" />
                    </Form.Item>
                  </Col>

                  {/* Upload Resume */}
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

                  {/* Submit Button */}
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

export default ExperiencedForm;
