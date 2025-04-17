// src/components/Experience/ExperienceStyles.js
import styled from 'styled-components';

/* Container for the whole section */
export const ExperienceSection = styled.section`
  padding: 80px 0;
`;

/* The “Experience” heading */
export const SectionHeader = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
`;

/* Grouping by company */
export const CompanyGroup = styled.div`
  margin-bottom: 48px;
`;

/* Company header (logo + name) */
export const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

/* Company’s logo */
export const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-right: 16px;
`;

/* Company name + optional subtitle */
export const CompanyInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 3rem;
  }
  /* you can add subtitle styling here if needed */
`;

/* The vertical list of roles */
export const RoleList = styled.div`
  border-left: 2px solid rgba(255,255,255,0.2);
  padding-left: 40px;
`;

/* One role entry */
export const RoleItem = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

/* The dot on the line */
export const Bullet = styled.div`
  position: absolute;
  left: -10px;
  top: 6px;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
`;

/* Wrapper for the text of each role */
export const RoleDetails = styled.div`
    margin: 40px 0;
`;

/* Role title (e.g. “Full‑Stack Developer”) */
export const RoleTitle = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;

/* Dates and duration */
export const RoleDates = styled.div`
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 4px 0;
`;

/* Location line */
export const RoleLocation = styled.div`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
`;

/* The skills highlights line */
export const RoleHighlights = styled.div`
  font-size: 1.8rem;
  margin-top: 4px;
  color: rgba(255,255,255,0.8);
`;
