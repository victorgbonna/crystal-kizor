
"use client";

import { useState } from "react";

const GOOGLE_SHEET_LINK =
  "https://script.google.com/macros/s/AKfycbyESt3yolubysMbe1gCG-vHdqiAaPW3Eq3O3ZNtj4eIHbk2hJ3_x3exffGvRs5KI6Y_SQ/exec";
const GOOGLE_SHEET_ID = "1ceqWQnf0WRwFWN76DV3GnJot7mqlJ9FwRENfnGZBGR8";

const conversationOptions = [
  {value: "general", label: "General"},
  {
    value: "project",
    label: "Start a Project",
    // description:
    //   "Discuss an architecture or interior design project with Studio COKA.",
  }
  ,
  {
    value: "learning",
    label: "Learn With Crystal",
    description:
      "Explore architectural education, professional development, and The Effective Architect.",
  },
  {
    value: "speaking",
    label: "Invite to Speak",
    description:
      "Invite Crystal to contribute to a conference, event, university discussion, or design conversation.",
  },
  {
    value: "ideas",
    label: "Explore Her Ideas",
    description:
      "Discuss media features, interviews, publishing, or conversations about architecture and the built environment.",
  },
  {
    value: "products",
    label: "Discover Her Products",
    description:
      "Explore ELEvated and its expression of Crystal's design thinking through objects and furniture.",
  },
  {
    value: "collaboration",
    label: "Collaborate With Crystal",
    description:
      "Start a conversation about potential partnerships, shared initiatives, or creative collaborations.",
  },
];

export default function InquiryForm() {
  const [pathway, setPathway] = useState("general");
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedPathway = conversationOptions.find(
      (option) => option.value === pathway,
    );

    setSubmissionStatus("submitting");
    setSubmissionError("");

    const payload = new URLSearchParams({
      sheetId: GOOGLE_SHEET_ID,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organisation: String(formData.get("organisation") || "").trim(),
      pathway,
      pathwayLabel: selectedPathway?.label || pathway,
      details: String(formData.get("details") || "").trim(),
      submittedAt: new Date().toISOString(),
    });

    try {
      const response = await fetch(GOOGLE_SHEET_LINK, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error(`The inquiry service returned ${response.status}.`);
      }

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const result = await response.json();
        if (result.success === false) {
          throw new Error(result.error || "The inquiry service could not save your message.");
        }
      }

      form.reset();
      setPathway("general");
      setSubmissionStatus("success");
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "We could not send your inquiry. Please try again.",
      );
      setSubmissionStatus("error");
    }
  }

  if (submissionStatus === "success") {
    return (
      <div
        className="bg-surface p-space-lg max-w-3xl mx-auto shadow-sm space-y-space-md"
        role="status"
        aria-live="polite"
      >
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
          {"THANK YOU"}
        </span>

        <h3 className="font-headline-sm text-headline-sm text-primary">
          {"Your inquiry has been sent."}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {"Thank you for reaching out to Crystal. Your message has been received and will be reviewed shortly."}
        </p>

        <button
          type="button"
          onClick={() => setSubmissionStatus("idle")}
          className="bg-primary text-on-primary hover:bg-secondary py-space-sm px-space-md font-label-md text-label-md uppercase tracking-widest transition-colors"
        >
          {"Send Another Inquiry"}
        </button>
      </div>
    );
  }

  return (
    <form
      className="bg-surface "
      onSubmit={handleSubmit}
      aria-busy={submissionStatus === "submitting"}
    >
      

      {/* Contact Details */}
      <div className='space-y-space-md'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="font-label-sm text-label-sm text-outline uppercase block"
          >
            {"Full Name *"}
          </label>

          <input
            id="name"
            className="w-full bg-surface-container-low px-space-sm py-space-sm font-body-sm text-body-sm text-primary placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Your name"
            required
            autoComplete="name"
            type="text"
            name="name"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="font-label-sm text-label-sm text-outline uppercase block"
          >
            {"Email Address *"}
          </label>

          <input
            id="email"
            className="w-full bg-surface-container-low px-space-sm py-space-sm font-body-sm text-body-sm text-primary placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="you@example.com"
            required
            autoComplete="email"
            type="email"
            name="email"
          />
        </div>
      </div>

      
      {/* Optional Organisation */}
      <div className="space-y-1">
        <label
          htmlFor="organisation"
          className="font-label-sm text-label-sm text-outline uppercase block"
        >
          {"Organisation or Company (Optional)"}
        </label>

        <input
          id="organisation"
          className="w-full bg-surface-container-low px-space-sm py-space-sm font-body-sm text-body-sm text-primary placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Your organisation, if applicable"
          autoComplete="organization"
          type="text"
          name="organisation"
        />
      </div>

      {/* Conversation Pathway */}
      <div className="space-y-1">
        <label
          htmlFor="pathway"
          className="font-label-sm text-label-sm text-outline uppercase block"
        >
          {"What Would You Like to Discuss? *"}
        </label>

        <select
          id="pathway"
          className="w-full bg-surface-container-low px-space-sm py-space-sm font-body-sm text-body-sm text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          name="pathway"
          value={pathway}
          onChange={(event) => setPathway(event.target.value)}
          required
        >
          {conversationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {
            conversationOptions.find(
              (option) => option.value === pathway
            )?.description
          }
        </p>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label
          htmlFor="details"
          className="font-label-sm text-label-sm text-outline uppercase block"
        >
          {"Tell Us More *"}
        </label>

        <textarea
          id="details"
          className="w-full bg-surface-container-low px-space-sm py-space-sm font-body-sm text-body-sm text-primary placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary resize-y"
          placeholder="Share a few details about your project, invitation, idea, or proposed collaboration. Include any relevant dates or timelines."
          required
          minLength={10}
          rows={5}
          name="details"
        />

        {/* <p className="font-body-sm text-body-sm text-on-surface-variant">
          {"A short overview is enough to get the conversation started."}
        </p> */}
      </div>
      </div>
      {/* Submit */}
      {submissionStatus === "error" && (
        <div
          className="border border-error bg-error-container p-space-sm font-body-sm text-body-sm text-on-error-container"
          role="alert"
        >
          {submissionError}
        </div>
      )}

      <button
        style={{marginTop:20}}
        className=" w-full bg-primary text-on-primary hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 py-space-sm px-space-md font-label-md text-label-md uppercase tracking-widest transition-colors flex items-center justify-center gap-space-xs focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        disabled={submissionStatus === "submitting"}
        type="submit"
      >
        <span>
          {submissionStatus === "submitting"
            ? "Sending Inquiry..."
            : "Send Inquiry"}
        </span>
        {/* <span className="material-symbols-outlined text-base" aria-hidden="true">
          {"arrow_forward"}
        </span> */}
      </button>

      {/* <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
        {"Your details should only be used to respond to your inquiry."}
      </p> */}
    </form>
  );
}
