import React from 'react';
import {
    CompanyGroup,
    CompanyHeader,
    CompanyLogo,
    CompanyInfo,
    RoleList,
    RoleItem,
    RoleDetails,
    RoleTitle,
    RoleDates,
    RoleHighlights,
} from './ExperienceStyles';
import { experience } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getDuration } from '../../utils/CalculateDuration';

const Experience = () => {
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

    const companies = Object.values(grouped);

    return (
        <Section id="experience">
            <SectionDivider />
            <SectionTitle>Experience</SectionTitle>

            {companies.map(({ company, logo, roles }) => (
                <CompanyGroup key={company}>
                    <CompanyHeader>
                        <CompanyLogo src={logo} alt={`${company} logo`} />
                        <CompanyInfo>
                            <h3>{company}</h3>
                        </CompanyInfo>
                    </CompanyHeader>

                    <RoleList>
                        {roles.map(role => (
                            <RoleItem key={`${role.company}-${role.role}-${role.startDate}`}>
                                <RoleDetails>
                                    <RoleTitle>{role.role}</RoleTitle>
                                    <RoleDates suppressHydrationWarning>
                                        {role.startDate} - {role.endDate} | {getDuration(role.startDate, role.endDate)}
                                    </RoleDates>

                                    {Array.isArray(role.description) && role.description.length > 0 && (
                                        <RoleHighlights as="ul">
                                            {role.description.map((desc, i) => (
                                                <li key={i}>- {desc}</li>
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
