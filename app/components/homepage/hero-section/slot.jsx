"use client";

import { useState, useEffect } from "react";

const SlotAvailability = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [nextDate, setNextDate] = useState("");

  // Sample target dates with initial slots
  const slotDates = [
    { date: "2025-07-23", initialSlots: 3, displayDate: "July 23" },
    { date: "2025-08-01", initialSlots: 8, displayDate: "August 1" },
    { date: "2025-08-15", initialSlots: 5, displayDate: "August 15" },
    { date: "2025-09-01", initialSlots: 7, displayDate: "September 1" },
  ];

  const calculateAvailableSlots = () => {
    const today = new Date();
    const nextAvailableSlot = slotDates.find(
      (slot) => new Date(slot.date) > today
    );

    if (!nextAvailableSlot) {
      return { slots: 0, displayDate: "No slots available" };
    }

    const slotDate = new Date(nextAvailableSlot.date);
    const daysUntilSlot = Math.ceil((slotDate - today) / (1000 * 60 * 60 * 24));

    // Calculate remaining slots based on days until the slot date
    let remainingSlots = nextAvailableSlot.initialSlots;

    // Decrease slots as we get closer to the date
    if (daysUntilSlot <= 3) {
      remainingSlots = 0; // 0 slots when very close (3 days or less)
    } else if (daysUntilSlot <= 7) {
      remainingSlots = Math.max(
        1,
        Math.floor(nextAvailableSlot.initialSlots * 0.2)
      ); // 20% remaining
    } else if (daysUntilSlot <= 14) {
      remainingSlots = Math.max(
        2,
        Math.floor(nextAvailableSlot.initialSlots * 0.5)
      ); // 50% remaining
    } else if (daysUntilSlot <= 21) {
      remainingSlots = Math.max(
        3,
        Math.floor(nextAvailableSlot.initialSlots * 0.7)
      ); // 70% remaining
    }

    return {
      slots: remainingSlots,
      displayDate: nextAvailableSlot.displayDate,
    };
  };

  useEffect(() => {
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
      <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 shadow-lg">
        <span className="text-white text-sm font-medium">
          🚀 Next availability: {nextDate} – {availableSlots} spot
          {availableSlots !== 1 ? "s" : ""} left
        </span>
      </div>
    </div>
  );
};

export default SlotAvailability;
