/**
 * @fileOverview Schemas for the contact form.
 *
 * - ContactFormInputSchema - The Zod schema for the contact form input.
 * - ContactFormInput - The inferred type for the contact form input.
 * - ContactFormOutputSchema - The Zod schema for the contact form output.
 * - ContactFormOutput - The inferred type for the contact form output.
 */

import { z } from 'genkit';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export const ContactFormOutputSchema = z.object({
  reply: z.string().describe('A confirmation message to the user.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
