import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Building2,
  CheckCircle2,
} from 'lucide-react';

const JobDetails = ({ applyForJob, applications }) => {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await fetch('/jobs.json');
        const data = await response.json();

        const foundJob = data.find(
          (job) => job.id === Number(id)
        );

        setJob(foundJob);
      } catch (error) {
        console.log(error);
      }
    }

    fetchJob();
  }, [id]);

  const alreadyApplied = applications.some(
    (application) => application.jobId === job?.id
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Briefcase size={19} />
            </div>

            <span className="text-xl font-bold">
              JobTrack
            </span>
          </Link>

          <div className="flex items-center gap-2">

            <Link
              to="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Dashboard
            </Link>

            <Link
              to="/jobs"
              className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
            >
              Jobs
            </Link>

            <Link
              to="/applications"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              My Applications
            </Link>

          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* Back */}
        <Link
          to="/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back to Jobs
        </Link>

        {job ? (
          <div className="space-y-6">

            {/* Job Header */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-2xl font-bold text-indigo-600">
                    {job.company.charAt(0)}
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-indigo-600">
                      {job.company}
                    </p>

                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                      {job.role}
                    </h1>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={16} />
                      {job.location}
                    </div>

                  </div>

                </div>

                <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                  Open
                </span>

              </div>

            </div>

            {/* Content */}
            <div className="grid gap-6 lg:grid-cols-3">

              {/* Description */}
              <div className="lg:col-span-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                  <h2 className="text-xl font-bold">
                    Job Description
                  </h2>

                  <p className="mt-5 leading-7 text-slate-500">
                    {job.description}
                  </p>

                </div>

              </div>

              {/* Job Information */}
              <div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                  <h2 className="text-lg font-bold">
                    Job Information
                  </h2>

                  <div className="mt-5 space-y-5">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Salary
                      </p>

                      <p className="mt-1 font-semibold">
                        {job.salary}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Location
                      </p>

                      <p className="mt-1 font-semibold">
                        {job.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Job Type
                      </p>

                      <p className="mt-1 font-semibold">
                        Full Time
                      </p>
                    </div>

                  </div>

                  {/* Apply Button */}
                  {alreadyApplied ? (
                    <button
                      disabled
                      className="mt-7 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-green-100 px-4 py-3 font-semibold text-green-700"
                    >
                      <CheckCircle2 size={18} />
                      Applied
                    </button>
                  ) : (
                    <button
                      onClick={() => applyForJob(job)}
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
                    >
                      <CheckCircle2 size={18} />
                      Apply Now
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="font-medium text-slate-500">
              Job not found
            </p>

            <Link
              to="/jobs"
              className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Browse Jobs
            </Link>
          </div>
        )}

      </main>

    </div>
  );
};

export default JobDetails;