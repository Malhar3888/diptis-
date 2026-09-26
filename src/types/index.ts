export interface EnquiryRecord {
  id: string;
  parent_name: string;
  child_name: string;
  child_age: string;
  phone: string;
  email: string;
  program: string;
  batch: string;
  message: string;
  created_at: string;
}

export interface FormErrors {
  parent_name?: string;
  child_name?: string;
  child_age?: string;
  phone?: string;
  email?: string;
  program?: string;
  batch?: string;
  message?: string;
}
