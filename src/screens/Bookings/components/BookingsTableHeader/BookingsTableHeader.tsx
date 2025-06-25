// IMPORTS
import { Button } from "@/shared/components/Button";

// CONSTS
const secondaryFilters = [
  { title: "Destination", icon: "chevronDown" as const },
  { title: "Travel Month", icon: "chevronDown" as const },
  { title: "Sort by", icon: "chevronDown" as const },
  { title: "Acc. Manager", icon: "chevronDown" as const },
  { title: "Trip Status", icon: "chevronDown" as const },
];

export const BookingsTableHeader = () => {
  // CONTENT
  const content = (
    <div className="bookings__header">
      <Button.Tertiary title="Lead pax/Trip id" icon="search" />

      {secondaryFilters.map(({ title, icon }) => (
        <Button.Secondary key={title} title={title} icon={icon} />
      ))}

      <Button.Tertiary title="Agent" icon="search" />

      <Button.Primary title="Apply" variant="primary" />
    </div>
  );

  return content;
};
