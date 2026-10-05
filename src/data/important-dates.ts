import { ImportantDate } from "@/types/conference";

export const importantDatesData: ImportantDate[] = [
  {
    id: "d1",
    label: "Full Paper Submission Deadline",
    date: "July 15, 2026",
    note: "Hard deadline - No extensions permitted",
    passed: false
  },
  {
    id: "d2",
    label: "Notification of Paper Acceptance",
    date: "August 30, 2026",
    note: "Reviewers decision sent to corresponding authors",
    passed: false
  },
  {
    id: "d3",
    label: "Camera-Ready Paper & Copyright Upload",
    date: "September 25, 2026",
    note: "Final version upload for IEEE/Springer indexing",
    passed: false
  },
  {
    id: "d4",
    label: "Early Bird Registration Cut-off",
    date: "September 30, 2026",
    note: "Discounts apply prior to midnight CET",
    passed: false
  },
  {
    id: "d5",
    label: "Author Registration Deadline",
    date: "October 15, 2026",
    note: "Mandatory for inclusion in conference proceedings",
    passed: false
  },
  {
    id: "d6",
    label: "Conference Dates",
    date: "November 20–22, 2026",
    note: "Geneva, Switzerland & Virtual Hybrid",
    passed: false
  }
];
