// "use client";

// import type React from "react";
// import { useState } from "react";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { CheckCircle2 } from "lucide-react";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   company: z.string().min(1, { message: "Company name is required" }),
//   licenseType: z.string().min(1, { message: "Please select a license type" }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters" }),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     company: "",
//     licenseType: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
//     {}
//   );
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateField = (name: keyof FormData, value: string) => {
//     try {
//       const fieldSchema = z.object({ [name]: formSchema.shape[name] });
//       fieldSchema.parse({ [name]: value });
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//       return true;
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         const fieldError = error.errors[0]?.message || `Invalid ${name}`;
//         setErrors((prev) => ({ ...prev, [name]: fieldError }));
//       }
//       return false;
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     validateField(name as keyof FormData, value);
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, licenseType: value }));
//     validateField("licenseType", value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     let isValid = true;
//     const newErrors: Partial<Record<keyof FormData, string>> = {};

//     Object.entries(formData).forEach(([key, value]) => {
//       const fieldKey = key as keyof FormData;
//       if (!validateField(fieldKey, value)) {
//         isValid = false;
//         try {
//           const fieldSchema = z.object({
//             [fieldKey]: formSchema.shape[fieldKey],
//           });
//           fieldSchema.parse({ [fieldKey]: value });
//         } catch (error) {
//           if (error instanceof z.ZodError) {
//             newErrors[fieldKey] =
//               error.errors[0]?.message || `Invalid ${fieldKey}`;
//           }
//         }
//       }
//     });

//     setErrors(newErrors);

//     if (isValid) {
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//           company: "",
//           licenseType: "",
//           message: "",
//         });
//       }, 1000);
//     } else {
//       setIsSubmitting(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-card rounded-lg border shadow-sm">
//         <div className="flex flex-col items-center justify-center text-center py-10">
//           <div className="rounded-full bg-primary/10 p-3 mb-4">
//             <CheckCircle2 className="h-10 w-10 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
//           <p className="text-muted-foreground mb-6">
//             Your message has been received. We&apos;ll get back to you shortly.
//           </p>
//           <Button
//             onClick={() => setIsSubmitted(false)}
//             className={undefined}
//             variant={undefined}
//             size={undefined}
//           >
//             Send Another Message
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section id="contact" className="py-12 px-4 md:py-16 lg:py-20">
//       <div className="container mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
//             Contact Us
//           </h2>
//           <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//             Have questions or ready to get started? Fill out the form below and
//             we&apos;ll be in touch.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-card rounded-lg border shadow-sm"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="name" className={undefined}>
//                 Name <span className="text-destructive">*</span>
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className={errors.name ? "border-destructive" : ""}
//                 type={undefined}
//               />
//               {errors.name && (
//                 <p className="text-sm text-destructive">{errors.name}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email" className={undefined}>
//                 Email <span className="text-destructive">*</span>
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your.email@example.com"
//                 className={errors.email ? "border-destructive" : ""}
//               />
//               {errors.email && (
//                 <p className="text-sm text-destructive">{errors.email}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="company" className={undefined}>
//                 Company <span className="text-destructive">*</span>
//               </Label>
//               <Input
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Your company name"
//                 className={errors.company ? "border-destructive" : ""}
//                 type={undefined}
//               />
//               {errors.company && (
//                 <p className="text-sm text-destructive">{errors.company}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="licenseType" className={undefined}>
//                 License Type <span className="text-destructive">*</span>
//               </Label>
//               <Select
//                 value={formData.licenseType}
//                 onValueChange={handleSelectChange}
//               >
//                 <SelectTrigger
//                   id="licenseType"
//                   className={errors.licenseType ? "border-destructive" : ""}
//                 >
//                   <SelectValue placeholder="Select license type" />
//                 </SelectTrigger>
//                 <SelectContent className={undefined}>
//                   <SelectItem value="basic" className={undefined}>
//                     Basic License
//                   </SelectItem>
//                   <SelectItem value="professional" className={undefined}>
//                     Professional License
//                   </SelectItem>
//                   <SelectItem value="enterprise" className={undefined}>
//                     Enterprise License
//                   </SelectItem>
//                   <SelectItem value="custom" className={undefined}>
//                     Custom License
//                   </SelectItem>
//                 </SelectContent>
//               </Select>
//               {errors.licenseType && (
//                 <p className="text-sm text-destructive">{errors.licenseType}</p>
//               )}
//             </div>
//           </div>

//           <div className="mt-6 space-y-2">
//             <Label htmlFor="message" className={undefined}>
//               Message <span className="text-destructive">*</span>
//             </Label>
//             <Textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us about your project or inquiry..."
//               className={`min-h-[120px] ${
//                 errors.message ? "border-destructive" : ""
//               }`}
//             />
//             {errors.message && (
//               <p className="text-sm text-destructive">{errors.message}</p>
//             )}
//           </div>

//           <div className="mt-8">
//             <Button
//               type="submit"
//               className="w-full md:w-auto"
//               disabled={isSubmitting}
//               variant={undefined}
//               size={undefined}
//             >
//               {isSubmitting ? "Sending..." : "Submit"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
