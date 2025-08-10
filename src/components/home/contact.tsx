'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';

import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/ai/flows/contact-flow';
import { type ContactFormInput, ContactFormInputSchema } from '@/ai/schemas/contact-schemas';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormInputSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormInput) {
    setLoading(true);
    try {
      const result = await sendContactMessage(values);
      toast({
        title: 'Message Sent!',
        description: result.reply,
      });
      form.reset();
    } catch (error) {
       toast({
        title: 'Something went wrong',
        description: 'Could not send the message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'm open to new opportunities and collaborations. Feel free to reach out."
        />
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline">Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <LoaderCircle className="animate-spin" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
