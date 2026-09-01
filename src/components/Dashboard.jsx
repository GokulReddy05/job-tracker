import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  CheckCircle2,
  Clock3,
  XCircle,
  ArrowRight,
  MapPin,
  CalendarDays,
} from 'lucide-react';

const Dashboard = ({ applications }) => {

  // Statistics
  const appliedJobs = applications.filter(
    (application) => application.status === 'Applied'
  );

  const inProgressJobs = applications.filter(
    (application) =>
      application.status === 'In Progress' ||
      application.status === 'Interview'
  );

  const rejectedJobs = applications.filter(
    (application) => application.status === 'Rejected'
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Briefcase size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              JobTrack
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">

            <Link
              to="/dashboard"
              className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
            >
              Dashboard
            </Link>

            <Link
              to="/jobs"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Jobs
            </Link>

            <Link
              to="/applications"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              My Applications
            </Link>

          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Overview
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Good to see you 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's an overview of your job search.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Applications
                </p>

                <p className="mt-3 text-3xl font-bold">
                  {applications.length}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Briefcase size={21} />
              </div>

            </div>

            <p className="mt-3 text-xs text-slate-400">
              All your applications
            </p>
          </div>

          {/* Applied */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Applied
                </p>

                <p className="mt-3 text-3xl font-bold">
                  {appliedJobs.length}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CheckCircle2 size={21} />
              </div>

            </div>

            <p className="mt-3 text-xs text-slate-400">
              Applications submitted
            </p>
          </div>

          {/* In Progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  In Progress
                </p>

                <p className="mt-3 text-3xl font-bold">
                  {inProgressJobs.length}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock3 size={21} />
              </div>

            </div>

            <p className="mt-3 text-xs text-slate-400">
              Interviews and active applications
            </p>
          </div>

          {/* Rejected */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Rejected
                </p>

                <p className="mt-3 text-3xl font-bold">
                  {rejectedJobs.length}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <XCircle size={21} />
              </div>

            </div>

            <p className="mt-3 text-xs text-slate-400">
              Unsuccessful applications
            </p>
          </div>

        </div>

        {/* Recent Applications */}
        <div className="mt-10">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold">
                Recent Applications
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest job applications
              </p>
            </div>

            <Link
              to="/applications"
              className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
              <ArrowRight size={16} />
            </Link>

          </div>

          {applications.length === 0 ? (

            /* Empty State */
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Briefcase size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                No applications yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Start exploring jobs and apply to opportunities that
                match your skills.
              </p>

              <Link
                to="/jobs"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Browse Jobs
                <ArrowRight size={16} />
              </Link>

            </div>

          ) : (

            /* Applications */
            <div className="space-y-4">

              {applications.slice(-5).reverse().map((application) => (

                <div
                  key={application.jobId}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Job */}
                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                        {application.jobCompany.charAt(0)}
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-indigo-600">
                          {application.jobCompany}
                        </p>

                        <h3 className="font-bold">
                          {application.jobRole}
                        </h3>

                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          <CalendarDays size={13} />
                          {new Date(
                            application.appliedDate
                          ).toLocaleDateString()}
                        </div>

                      </div>

                    </div>

                    {/* Status */}
                    <span
                      className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                        application.status === 'Rejected'
                          ? 'bg-red-50 text-red-600'
                          : application.status === 'Interview'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-green-50 text-green-600'
                      }`}
                    >
                      {application.status}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Browse Jobs CTA */}
        {applications.length > 0 && (
          <div className="mt-8 flex items-center justify-between rounded-2xl bg-indigo-600 p-6 text-white">

            <div>
              <h2 className="text-lg font-bold">
                Looking for your next opportunity?
              </h2>

              <p className="mt-1 text-sm text-indigo-100">
                Explore new jobs and keep building your career.
              </p>
            </div>

            <Link
              to="/jobs"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Browse Jobs
              <ArrowRight size={16} />
            </Link>

          </div>
        )}

      </main>

    </div>
  );
};

export default Dashboard;