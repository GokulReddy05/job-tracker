import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  CalendarDays,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

const Applications = ({ applications }) => {
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
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Jobs
            </Link>

            <Link
              to="/applications"
              className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
            >
              My Applications
            </Link>

          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="mb-8">

          <Link
            to="/jobs"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Browse Jobs
          </Link>

          <h1 className="text-4xl font-bold tracking-tight">
            My Applications
          </h1>

          <p className="mt-2 text-slate-500">
            Track and manage your job applications in one place.
          </p>

        </div>

        {/* Empty State */}
        {applications.length === 0 ? (

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Briefcase size={26} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              No applications yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Start exploring jobs and apply to opportunities that match
              your skills and career goals.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Jobs
            </Link>

          </div>

        ) : (

          <div className="space-y-4">

            {/* Summary */}
            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold">
                  Your Applications
                </h2>

                <p className="text-sm text-slate-500">
                  {applications.length} application
                  {applications.length !== 1 ? 's' : ''}
                </p>
              </div>

            </div>

            {/* Application Cards */}
            {applications.map((application) => (

              <div
                key={application.jobId}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* Job Info */}
                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600">
                      {application.jobCompany.charAt(0)}
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-indigo-600">
                        {application.jobCompany}
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        {application.jobRole}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">

                        <span className="flex items-center gap-1.5">
                          <MapPin size={15} />
                          Application submitted
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={15} />
                          {new Date(
                            application.appliedDate
                          ).toLocaleDateString()}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Status */}
                  <div className="flex items-center">

                    <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                      <CheckCircle2 size={14} />
                      {application.status}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
};

export default Applications;