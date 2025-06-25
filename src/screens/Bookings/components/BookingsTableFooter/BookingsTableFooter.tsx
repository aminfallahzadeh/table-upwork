// IMPORTS
import { Button } from "@/shared/components/Button";
import Icon from "@/shared/components/Icon/Icon";

const TOTAL_RESULTS = 60;
const CURRENT_RESULTS = 15;
const PAGE_COUNT = 5;

const getPaginationStatus = (index: number, activePage = 1) =>
  index === activePage ? "active" : "inactive";

export const BookingsTableFooter = () => {
  // CONSTS
  const activePage = 1;

  // CONTENT
  const content = (
    <footer className="bookings__footer">
      <div className="bookings__footer--info">
        <p>
          <span>{CURRENT_RESULTS}</span> out of {TOTAL_RESULTS} results
        </p>
      </div>

      <div className="bookings__footer--pagination">
        <Icon icon="doubleChevronLeft" alt="Previous pages" />

        <div className="bookings__footer--pagination--pages">
          {Array.from({ length: PAGE_COUNT }, (_, index) => {
            const pageNum = (index + 1).toString();
            return (
              <Button.Pagination
                key={pageNum}
                num={pageNum}
                status={getPaginationStatus(index, activePage)}
              />
            );
          })}
        </div>

        <Icon icon="chevronRight" alt="Next page" />
        <Icon icon="doubleChevronRight" alt="Next pages" />
      </div>
    </footer>
  );

  return content;
};
