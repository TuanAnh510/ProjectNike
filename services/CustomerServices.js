import requests from "./HttpServices";

const CustomerService = {
  verifyEmailAddress: async (body) => {
    return requests.post("/customer/verify-email", body);
  },

  registerCustomer: async (body) => {},
};
export default CustomerService;
