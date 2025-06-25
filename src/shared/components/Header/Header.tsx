// IMPORTS
import type { HeaderProps } from "./types";
import Icon from "@/shared/components/Icon/Icon";

const Header = ({ title }: HeaderProps) => {
    return (
        <section className="header">
            <div className="header__info">
                <div className="header__info--icon">
                    <Icon icon="group" alt="Group" />
                </div>
                <h2 className="header__info--title">{title}</h2>
            </div>

            <div className="header__actions">
                <Icon icon="sun" alt="Sun" />
                <div className="header__actions--download">
                    <Icon icon="download" alt="Download" />
                </div>
            </div>
        </section>
    );
};

export default Header;
