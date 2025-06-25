// IMPORTS
import { BookingsTableHeader } from "../BookingsTableHeader";
import { BookingsTableFooter } from "../BookingsTableFooter";
import { Button } from "@/shared/components/Button";
import { tableHeaders, tableRows } from "../data";

export const BookingsTable = () => {
  // CONSTS
  const getTripStatusClass = (status: string) => {
    const map: Record<string, string> = {
      Travelled: "trip-status__gr",
      Confirmed: "trip-status__bl",
      Cancelled: "trip-status__rd",
    };
    return map[status] ?? "trip-status__yl";
  };

  const getBookingStatusClass = (status: string) =>
    status === "done" ? "done" : "pending";

  // CONTENT
  const content = (
    <div className="bookings__body">
      <div className="table__wrapper">
        <BookingsTableHeader />

        <div>
          <table className="table">
            <thead>
              <tr className="table__header">
                {tableHeaders.map((header) => (
                  <th key={header} className="table__cell">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableRows.map((row) => (
                <tr key={row.tripId} className="table__row">
                  <td className="table__cell">{row.tripId}</td>
                  <td className="table__cell">{row.arrival}</td>
                  <td className="table__cell">{row.departure}</td>
                  <td className="table__cell">{row.travelMonth}</td>
                  <td className="table__cell">{row.destination}</td>
                  <td className="table__cell">{row.accManager}</td>
                  <td className="table__cell">{row.bookingDate}</td>
                  <td className="table__cell">{row.agent}</td>
                  <td className="table__cell">{row.leadPax}</td>
                  <td className="table__cell">{row.orderValue}</td>
                  <td className="table__cell">{row.paymentValue}</td>
                  <td className="table__cell">{row.transferPrice}</td>
                  <td className="table__cell">
                    <div
                      className={`trip-status ${getTripStatusClass(
                        row.tripStatus
                      )}`}
                    >
                      {row.tripStatus}
                    </div>
                  </td>
                  <td className="table__cell">{row.opsSpoc}</td>
                  <td className="table__cell">
                    <div
                      className={`booking-status ${getBookingStatusClass(
                        row.bookingStatus
                      )}`}
                    />
                  </td>
                  <td className="table__cell">{row.vouchers}</td>
                  <td className="table__cell">
                    <Button.Action icon="edit" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BookingsTableFooter />
      </div>
    </div>
  );

  return content;
};
