"use client";

import { useState, useEffect } from "react";

const SlotAvailability = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [nextDate, setNextDate] = useState("");

  // Sample target dates with initial slots

  useEffect(() => {
    const slotDates = [
      { date: "2025-07-23", initialSlots: 3, displayDate: "July 23" },
      { date: "2025-08-01", initialSlots: 8, displayDate: "August 1" },
      { date: "2025-08-15", initialSlots: 5, displayDate: "August 15" },
      { date: "2025-09-01", initialSlots: 7, displayDate: "September 1" },
    ];

    const calculateAvailableSlots = () => {
      const today = new Date();
      // Find the first slot whose date is after today
      const nextAvailableSlot = slotDates.find(
        (slot) => new Date(slot.date) > today
      );

      if (!nextAvailableSlot) {
        return { slots: 0, displayDate: "No slots available" };
      }

      const slotDate = new Date(nextAvailableSlot.date);
      const daysUntilSlot = Math.ceil(
        (slotDate - today) / (1000 * 60 * 60 * 24)
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
          (slot) => new Date(slot.date) > slotDate
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
      <div className="inline-flex items-center rounded-full bg-[#10172a] px-3 py-3 shadow-lg border border-[#232946]">
        <span className="bg-[#16f2b3] text-gray-900 font-semibold px-4 py-1 rounded-full mr-2 text-sm">
          {availableSlots} spot{availableSlots !== 1 ? "s" : ""} left
        </span>
        <span className="text-gray-300 text-sm font-medium">
          For {nextDate} <span aria-hidden="true"></span>
        </span>
      </div>
    </div>
  );
};

export default SlotAvailability;
