'use server';
/**
 * @fileOverview A contact form handler.
 *
 * - sendContactMessage - A function that handles sending a contact message.
 */

import {ai} from '@/ai/genkit';
import { ContactFormInputSchema, ContactFormOutputSchema, type ContactFormInput, type ContactFormOutput } from '@/ai/schemas/contact-schemas';


export async function sendContactMessage(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return contactFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You have received a new message from your portfolio contact form.
The user's name is {{name}} and their email is {{email}}.
The message is:
{{message}}

Generate a short, friendly, and professional reply confirming that you have received the message and will get back to them shortly. Address them by their name.`,
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    // In a real application, you would add logic here to send an email.
    // For this example, we'll just generate a confirmation reply.
    const {output} = await prompt(input);
    return output!;
  }
);
