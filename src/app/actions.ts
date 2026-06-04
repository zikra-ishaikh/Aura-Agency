'use server';

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Artificial network delay to demonstrate premium pending spinner states
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const projectType = formData.get('projectType') as string;

  const errors: { name?: string[]; email?: string[]; message?: string[] } = {};

  // Validate Name
  if (!name || name.trim().length < 2) {
    errors.name = ['Name must be at least 2 characters long.'];
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ['Please provide a valid email address.'];
  }

  // Validate Message
  if (!message || message.trim().length < 10) {
    errors.message = ['Message must be at least 10 characters long.'];
  }

  // Check validation results
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the validation issues before submitting.',
      errors,
    };
  }

  // Simulated logs
  console.log('Project lead submission received:', { name, email, message, projectType });

  return {
    success: true,
    message: `Thank you, ${name}! Your consultation request was received. We will contact you soon.`,
  };
}
