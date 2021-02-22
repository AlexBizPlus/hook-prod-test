import React, { useRef } from "react";
import cn from "classnames";
import s from "./Specification.module.scss";
import { ReactComponent as HideArrowSvg } from "../../img/hide-arrow.svg";

const Specification = ({ nutrition, ingridients, other }) => {
  const nutritionTableRef = useRef();
  const buttonNameRef = useRef();
  const buttonArrowRef = useRef();

  const handleButtonClick = () => {
    if (nutritionTableRef.current.style.display === "none") {
      nutritionTableRef.current.style.display = "";
      buttonNameRef.current.textContent = "Hide";
      buttonArrowRef.current.setAttribute("style", `transform:rotate(0)`);
      return;
    }
    nutritionTableRef.current.style.display = "none";
    buttonNameRef.current.textContent = "Show";
    buttonArrowRef.current.setAttribute("style", `transform:rotate(180deg)`);
  };

  const formatValueText = (text) => {
    const letters = text.replace(
      /([a-zA-Z]+)/gi,
      '<span style="font-size: 14px">$1</span>'
    );

    return {
      __html: letters,
    };
  };

  const formattedText = (text) => {
    return { __html: text };
  };

  return (
    <section className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        <h4 className={cn(s.caption)} id="nutrition">
          Nutrition
        </h4>
        <div
          className={cn(s.text)}
          dangerouslySetInnerHTML={formattedText(nutrition.text)}
        />
        <ul className={cn(s.nutrition_list)}>
          {nutrition.list.map((item, i) => {
            return <li key={i + i}>{item}</li>;
          })}
        </ul>
        <ul className={cn(s.nutrition_table)} ref={nutritionTableRef}>
          {nutrition.table.map((item, i) => {
            return (
              <li className={cn(s.nutrition_table_item)} key={i + i}>
                <span
                  className={cn(s.table_item_value)}
                  dangerouslySetInnerHTML={formatValueText(item.value)}
                />
                <span className={cn(s.table_item_variable)}>
                  {item.variable}
                </span>
                <div className={cn(s.table_item_bottom_wrapper)}>
                  <span className={cn(s.table_item_bottom, s.table_item_RI)}>
                    {`${item.RI}% RI`}
                  </span>
                  {item.misc && (
                    <span
                      className={cn(s.table_item_bottom, s.table_item_misc)}
                    >
                      {item.misc}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className={cn(s.hide_button)}
          type="button"
          onClick={handleButtonClick}
        >
          <span ref={buttonNameRef}>Hide</span>
          <HideArrowSvg
            className={cn(s.hide_button_arrow)}
            ref={buttonArrowRef}
          />
        </button>
        <h4 className={cn(s.caption)} id="ingredients">
          Ingredients
        </h4>
        <div
          className={cn(s.text, s.bottom_line)}
          dangerouslySetInnerHTML={formattedText(ingridients)}
        />
        <h4 className={cn(s.caption)} id="other">
          Other
        </h4>
        <table className={cn(s.other_table)}>
          <tbody>
            {Object.entries(other).map(([key, value]) => {
              return (
                <tr className={cn(s.other_table_row)} key={key}>
                  <td className={cn(s.other_table_key)}>{key}</td>
                  <td className={cn(s.other_table_value)}>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Specification;
