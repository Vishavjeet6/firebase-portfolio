import AnalyzerForm from "./analyzer-form";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SectionHeading from "@/components/section-heading";

export default function ResumeAnalyzerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section>
          <div className="container">
            <SectionHeading
              title="Resume Analyzer"
              subtitle="Upload a resume to get an AI-powered summary and skill extraction. This helps tailor your resume for job applications."
            />
            <AnalyzerForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
