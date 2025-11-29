import React, { useState } from "react";
import { Sun, Moon, Monitor, Database, RefreshCcw, Brain, Settings2 } from "lucide-react";
import { useTheme } from "../hooks/useTheme"; // adjust path if needed


const Settings = () => {
  // const [theme, setTheme] = useState("system");
  // const [theme, setTheme] = useState("light");


  const { theme, toggleTheme } = useTheme();

  
  const [apiStatus, setApiStatus] = useState("Connected");
  const [modelVersion, setModelVersion] = useState("v1.2 - EEG-Meditation");

  // const handleThemeChange = (mode) => {
  //   setTheme(mode);
  //   // document.documentElement.classList.toggle("dark", mode === "dark");
  //   document.documentElement.classList.toggle("dark", mode === "dark");
  // };

  const handleThemeChange = (mode) => {
    if (mode === "light") {
      toggleTheme("light");
    } else if (mode === "dark") {
      toggleTheme("dark");
    } else {
      // system mode
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      toggleTheme(systemDark ? "dark" : "light");
    }
  };


  const handleModelRefresh = () => {
    alert("Model reloaded successfully (demo)!");
  };

  const handleBackendCheck = () => {
    setApiStatus("Checking...");
    setTimeout(() => setApiStatus("Connected"), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Settings2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard Settings
          </h1>
        </div>

        {/* Theme Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-500" /> Theme Preference
          </h2>
          <div className="flex gap-4">
            {["light", "dark", "system"].map((mode) => (
              <button
                key={mode}
                onClick={() => handleThemeChange(mode)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium border transition-all ${theme === mode
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
              >
                {mode === "light" && <Sun size={18} />}
                {mode === "dark" && <Moon size={18} />}
                {mode === "system" && <Monitor size={18} />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* API Connection & Model Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-green-500" /> Backend Connection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Flask server endpoint: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:8000/api</code>
            </p>
            <div className="flex justify-between items-center">
              <span
                className={`text-sm font-semibold ${apiStatus === "Connected" ? "text-green-600" : "text-yellow-500"
                  }`}
              >
                {apiStatus}
              </span>
              <button
                onClick={handleBackendCheck}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
              >
                <RefreshCcw size={18} /> Check Status
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-purple-500" /> Model Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Current ML model: <span className="font-semibold">{modelVersion}</span>
            </p>
            <button
              onClick={handleModelRefresh}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            >
              <RefreshCcw size={18} /> Reload Model
            </button>
          </div>
        </div>

        {/* Project & Data Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" /> Project Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <p className="text-blue-700 dark:text-blue-300 font-semibold">Project Title</p>
              <p className="text-gray-800 dark:text-gray-200">EEG and Meditation — Brainwave Analysis</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
              <p className="text-green-700 dark:text-green-300 font-semibold">Active Model Accuracy</p>
              <p className="text-gray-800 dark:text-gray-200">65.7%</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4">
              <p className="text-yellow-700 dark:text-yellow-300 font-semibold">Last Update</p>
              <p className="text-gray-800 dark:text-gray-200">October 25, 2025</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
              <p className="text-indigo-700 dark:text-indigo-300 font-semibold">Data Groups</p>
              <p className="text-gray-800 dark:text-gray-200">HTR, CTR, TM, VIP, SNY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
