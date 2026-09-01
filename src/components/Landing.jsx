import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  ArrowRight,
  Search,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Briefcase size={20} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              JobTrack
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">

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
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              My Applications
            </Link>

          </div>

          <Link
            to="/jobs"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Browse Jobs
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <main>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600">
                <CheckCircle2 size={16} />
                Your job search, organized
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Take control of your
                <span className="text-indigo-600"> career journey.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Discover opportunities, track every application,
                and stay organized throughout your job search.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/jobs"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  Explore Jobs
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/dashboard"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  View Dashboard
                </Link>

              </div>

            </div>

            {/* Right Preview */}
            <div className="relative">

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">

                {/* Preview Header */}
                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Application Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold">
                      Your job search
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <BarChart3 size={20} />
                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Applied
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                      24
                    </p>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <p className="text-xs text-indigo-600">
                      Active
                    </p>
                    <p className="mt-2 text-2xl font-bold text-indigo-600">
                      12
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">
                      Interviews
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                      5
                    </p>
                  </div>

                </div>

                {/* Recent Applications */}
                <div className="mt-5 rounded-2xl border border-slate-100">

                  <div className="border-b border-slate-100 p-4">
                    <p className="font-semibold">
                      Recent applications
                    </p>
                  </div>

                  <div className="space-y-1 p-3">

                    <div className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                          G
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            Google
                          </p>
                          <p className="text-xs text-slate-500">
                            AI Engineer
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                        Applied
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                          M
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            Microsoft
                          </p>
                          <p className="text-xs text-slate-500">
                            Software Engineer
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-600">
                        Interview
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-16">

            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">
                Everything for your job search
              </h2>

              <p className="mt-2 text-slate-500">
                Keep your applications organized from discovery to offer.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 p-6">
                <Search className="text-indigo-600" size={24} />

                <h3 className="mt-5 text-lg font-bold">
                  Discover Jobs
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Search through opportunities and find roles that match
                  your career goals.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <CheckCircle2 className="text-indigo-600" size={24} />

                <h3 className="mt-5 text-lg font-bold">
                  Track Applications
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Keep every application organized and know exactly
                  where you stand.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <BarChart3 className="text-indigo-600" size={24} />

                <h3 className="mt-5 text-lg font-bold">
                  Measure Progress
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  See your application activity and understand your
                  job search progress.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Landing;