"use client";

import { useState, useEffect } from "react";

const SlotAvailability = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [nextDate, setNextDate] = useState("");

  // Sample target dates with initial slots

  useEffect(() => {
    const slotDates = [
      { date: "2025-07-23", initialSlots: 3, displayDate: "July 23, 2025" },
      { date: "2025-08-01", initialSlots: 8, displayDate: "August 1, 2025" },
      { date: "2025-08-15", initialSlots: 5, displayDate: "August 15, 2025" },
      { date: "2025-09-01", initialSlots: 7, displayDate: "September 1, 2025" },
      {
        date: "2025-09-15",
        initialSlots: 4,
        displayDate: "September 15, 2025",
      },
      {
        date: "2025-09-30",
        initialSlots: 2,
        displayDate: "September 30, 2025",
      },
      { date: "2025-10-10", initialSlots: 4, displayDate: "October 10, 2025" },
      { date: "2025-11-05", initialSlots: 6, displayDate: "November 5, 2025" },
      { date: "2025-12-20", initialSlots: 3, displayDate: "December 20, 2025" },
      { date: "2026-01-15", initialSlots: 5, displayDate: "January 15, 2026" },
      { date: "2026-02-10", initialSlots: 7, displayDate: "February 10, 2026" },
      { date: "2026-03-05", initialSlots: 4, displayDate: "March 5, 2026" },
      { date: "2026-04-18", initialSlots: 6, displayDate: "April 18, 2026" },
      { date: "2026-05-22", initialSlots: 5, displayDate: "May 22, 2026" },
      { date: "2026-06-30", initialSlots: 8, displayDate: "June 30, 2026" },
      { date: "2026-07-25", initialSlots: 3, displayDate: "July 25, 2026" },
      { date: "2026-08-14", initialSlots: 7, displayDate: "August 14, 2026" },
      { date: "2026-09-09", initialSlots: 4, displayDate: "September 9, 2026" },
      { date: "2026-10-20", initialSlots: 6, displayDate: "October 20, 2026" },
      { date: "2026-11-15", initialSlots: 5, displayDate: "November 15, 2026" },
      { date: "2026-12-05", initialSlots: 8, displayDate: "December 5, 2026" },
    ];

    const calculateAvailableSlots = () => {
      const today = new Date();
      // Find the first slot whose date is after today
      const nextAvailableSlot = slotDates.find(
        (slot) => new Date(slot.date) > today,
      );

      if (!nextAvailableSlot) {
        return { slots: 0, displayDate: "No slots available" };
      }

      const slotDate = new Date(nextAvailableSlot.date);
      const daysUntilSlot = Math.ceil(
        (slotDate - today) / (1000 * 60 * 60 * 24),
      );

      let remainingSlots = 1;

      const monthYear = slotDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      let displayDate = monthYear;

      if (daysUntilSlot <= 0) {
        // Try to find the next slot after this one
        const nextSlot = slotDates.find(
          (slot) => new Date(slot.date) > slotDate,
        );
        if (nextSlot) {
          remainingSlots = 1;
          const nextSlotDate = new Date(nextSlot.date);
          displayDate = nextSlotDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
        } else {
          remainingSlots = 0;
          displayDate = "No slots available";
        }
      }

      return {
        slots: remainingSlots,
        displayDate: displayDate,
      };
    };

    const updateSlots = () => {
      const slotInfo = calculateAvailableSlots();
      setAvailableSlots(slotInfo.slots);
      setNextDate(slotInfo.displayDate);
    };

    updateSlots();

    // Update every hour
    const interval = setInterval(updateSlots, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mb-8">
      <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 border border-gray-200">
        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
        <span className="text-gray-600 text-sm font-medium">
          {availableSlots} spot{availableSlots !== 1 ? "s" : ""} available for{" "}
          {nextDate}
        </span>
      </div>
    </div>
  );
};

export default SlotAvailability;
