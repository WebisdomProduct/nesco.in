export const apiBaseUrl = "https://nesco-backend-pi.vercel.app";
// export const apiBaseUrl = "http://localhost:8040";

export const apiUrls = {
  login: "/api/v1/auth/login",
  upload: {
    uploadImage: "/api/v1/upload/uploadImage",
    uploadDocument: "/api/v1/upload/uploadDocument",
    upploadVideo: "/api/v1/upload/uploadMedia",
  },

  // API for Sebi Page
  // sebi: "/api/v1/sebi/",
  announcements: "/api/v1/announcements",
  financials: "/api/v1/financials",
  internship: "/api/v1/internship",
  graduates: "/api/v1/graduates",
  experience: "/api/v1/experience",
  shareholder: {
    documents: "/api/v1/shareholder/documentDetail",
    unclaimed: "/api/v1/shareholder/unclaimed",
    corner: "/api/v1/shareholder/corner",
  },
};
