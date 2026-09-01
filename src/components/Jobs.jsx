import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  Building2,
} from 'lucide-react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/jobs.json');

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError('Failed to load jobs');
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job)=> job.company.toLowerCase().includes(value.toLowerCase())||
   job.role.toLowerCase().includes(value.toLowerCase()) ||
   job.location.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Briefcase size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              JobTrack
            </span>
          </Link>

          <div className="flex items-center gap-2">

            <Link
              to="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
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
        <div className="mb-8">

          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Opportunities
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Find your next opportunity
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            Discover jobs that match your skills and keep your entire
            application journey organized in one place.
          </p>

        </div>

        {/* Search */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

          <div className="flex items-center gap-3">

            <Search
              size={21}
              className="ml-2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search jobs, companies, or roles..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-transparent py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-60 items-center justify-center">
            <p className="text-sm font-medium text-slate-500">
              Loading jobs...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Jobs */}
        {!loading && !error && (
          <>
            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Available Jobs
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Explore opportunities from top companies
                </p>
              </div>

              <p className="text-sm font-medium text-slate-500">
                {jobs.length} jobs
              </p>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredJobs.map((job) => (

                <div
                  key={job.id}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >

                  {/* Company */}
                  <div className="mb-5 flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Building2 size={22} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      Full Time
                    </span>

                  </div>

                  {/* Job Info */}
                  <div className="flex-1">

                    <p className="mb-1 text-sm font-semibold text-indigo-600">
                      {job.company}
                    </p>

                    <h3 className="text-xl font-bold text-slate-900">
                      {job.role}
                    </h3>

                    <div className="mt-4 space-y-2">

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <span>₹</span>
                        <span>{job.salary}</span>
                      </div>

                    </div>

                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                      {job.description}
                    </p>

                  </div>

                  {/* Action */}
                  <Link
                    to={`/jobs/${job.id}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              ))}

            </div>
          </>
        )}

      </main>
    </div>
  );
};

export default Jobs;