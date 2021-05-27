import React from "react";
//https://dev.to/mhmmdysf/handling-multiple-checkboxes-in-react-3efe
export default function PizzaExtrasPicker({
  avaiableExtras: extras,
  onExtraSelected,
}) {
  const handleChange = (event) => {
    onExtraSelected(event.target.value);
  };

  return (
    <div>
      <h3>Vyberte, co máme přidat: </h3>

      <div>
        {extras.map((item) => (
          <label key={item.id}>
            <input
              value={item.id}
              type="checkbox"
              checked={item.isChecked}
              onChange={handleChange}
            />
            {item.value}
            <br />
          </label>
        ))}
      </div>
    </div>
  );
}

<></>;
