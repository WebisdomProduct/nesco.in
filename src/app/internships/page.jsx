"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Card, Row, Col } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Image from "next/image";
import img from "@/assests/internships/intern2.jpg";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";

const InternshipForm = () => {
  const [form] = Form.useForm();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleFinish = (values) => {
    console.log("Form values:", values);
    message.success("Application submitted successfully!");
    form.resetFields(); // Reset form after submission
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  return (
    <>
      <Navbar activeSlide={activeSlide} />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:py-8">
        <Card
          className="w-full md:w-[1500px] bg-white rounded-xl overflow-hidden lg:mt-[7vh]"
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
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
              >
                <Row gutter={[24, 16]}>
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
                      label="University & Degree"
                      name="university"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your university and degree",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your university and degree"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

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
                      >
                        Submit Application
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
