import React from 'react';
import {
    ExperienceSection,
    SectionHeader,
    CompanyGroup,
    CompanyHeader,
    CompanyLogo,
    CompanyInfo,
    RoleList,
    RoleItem,
    Bullet,
    RoleDetails,
    RoleTitle,
    RoleDates,
    RoleLocation,
    RoleHighlights,
} from './ExperienceStyles';
import {experience} from '../../constants/constants';
import {Section, SectionDivider, SectionTitle} from "../../styles/GlobalComponents";
import {getDuration} from "../../utils/CalculateDuration";

const Experience = () => {
    // 1. Group by company name
    const grouped = experience.reduce((acc, entry) => {
        const key = entry.company;
        if (!acc[key]) {
            acc[key] = {
                company: entry.company,
                logo: entry.logo,
                roles: []
            };
        }
        acc[key].roles.push(entry);
        return acc;
    }, {});

    // 2. Turn it into an array for mapping
    const companies = Object.values(grouped);

    return (
        <Section id="experience">
            <SectionDivider/>
            <SectionTitle>Experience</SectionTitle>

            {companies.map(({company, logo, roles}) => (
                <CompanyGroup key={company}>
                    <CompanyHeader>
                        <CompanyLogo src={logo} alt={company}/>
                        <CompanyInfo>
                            <h3>{company}</h3>
                        </CompanyInfo>
                    </CompanyHeader>

                    <RoleList>
                        {roles.map(role => (
                            <RoleItem key={role.id}>
                                <RoleDetails>
                                    <RoleTitle>{role.role}</RoleTitle>
                                    <RoleDates>
                                        {role.startDate} – {role.endDate} · {getDuration(role.startDate, role.endDate)}
                                    </RoleDates>

                                    {/* only render if highlights is a non-empty array */}
                                    {Array.isArray(role.description) && role.description.length > 0 && (
                                        <RoleHighlights as="ul">
                                            {role.description.map((desc, i) => (
                                                <li key={i}>♦ {desc}</li>
                                            ))}
                                        </RoleHighlights>
                                    )}
                                </RoleDetails>
                            </RoleItem>
                        ))}
                    </RoleList>
                </CompanyGroup>
            ))}
        </Section>
    );
};

export default Experience;
