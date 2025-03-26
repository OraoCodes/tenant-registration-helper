
import { toast } from "sonner";
import type { RegistrationFormData } from "./validation";

const API_ENDPOINT = "https://api-feature-sprint2-q1-payment-integration.mr.saas.gebeya.io/v1/auth/signup";
const LOGIN_ENDPOINT = "https://api-feature-sprint2-q1-payment-integration.mr.saas.gebeya.io/v1/auth/signin";

export async function registerTenant(formData: RegistrationFormData) {
  try {
    const payload = {
      organizationDetails: formData.organizationDetails,
      contactPersonsDetails: formData.contactPersonsDetails,
      realm: "TENANT",
      logoUrl: "https://storage.googleapis.com/g-saas.appspot.com/tenants/registration/tenant_logo_placeholder_1740984110001.png",
      redirectUrl: "https://accounts-feature-sprint2-q1-payment-integration.mr.saas.gebeya.io/auth/sign-in?verify=U2FsdGVkX1%2F%2Frocm9IHUI3wXF8CyhyzMf8OmsLWcC2fel1AULJdpcZYK5whxuwlrDVMuGSk91AQpC1PcHjgHgw%3D%3D",
      password: formData.password,
      recaptchaToken: formData.recaptchaToken,
    };

    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred");
    }
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const payload = {
      emailAddress: email,
      password: password,
    };

    const response = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    // Store token or user data in localStorage for session management
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred");
    }
    throw error;
  }
}
