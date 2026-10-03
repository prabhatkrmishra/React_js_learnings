"use client";

import { Component } from "react";
import type { CSSProperties } from "react";
import styled from "styled-components";

import modulestyles from "@/components/NavBar.module.css";

interface CartNumberProp {
  cartcount: number;
}

class NavBar extends Component<CartNumberProp, {}> {
  render() {
    const cartcount = this.props.cartcount;

    return (
      <nav className={modulestyles.navbar}>
        <div className={modulestyles.title}>Movie Mania</div>

        <div style={styles.cartContainer}>
          <div style={styles.cartIconContainer}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6" />
            </svg>

            {cartcount > 0 && <CartBadge>{cartcount}</CartBadge>}
          </div>

          <CartText>Cart</CartText>
        </div>
      </nav>
    );
  }
}

export default NavBar;

/********************** Styled Components **********************/
// CSS property names must use hyphens
// CSS values must not be quoted
const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 999px;
  background: #ef4444;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const CartText = styled.span`
  fontsize: "15px";
  fontweight: "600";
`;
/********************** ***************** **********************/

const styles: Record<string, CSSProperties> = {
  cartContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    color: "#111827",
  },

  cartIconContainer: {
    position: "relative",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} satisfies Record<string, React.CSSProperties>;
