import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel: 443-416-5096">443-416-5096</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="tel: contact@danielbeckjr.com">Contact@DanielBeckJr.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <CompanyContainer>
            <Slogan><i>“Tell me and I forget, teach me and I may remember, involve me and I learn.”</i><small> ―Benjamin Franklin</small></Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/db1721">
        <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/daniel-beck-18700aa7/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/dan.beck.58726/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
