import { ErrorMessage, Field, Formik } from 'formik'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { ButtonSubmit } from '../button-submit'
import { profileData } from './types'
import { profileSchema } from '../../schemas'
import { UserContext } from '../context/user'
import avatar from '../../assets/images/profile-avatar.png'

export const Profile = () => {
    const [user] = useContext(UserContext)
    const onSubmit = () => {

    }

    return (
            <Wrapper>
                {user.auth && <ProfileImage>
                    <img src={avatar} alt="Avatar" />
                </ProfileImage>}

                <Formik
                    initialValues={{
                        fullname: profileData?.fullname,
                        email: profileData?.email,
                        linkWebsite: profileData?.linkWebsite,
                    }}
                    onSubmit={onSubmit}
                    validationSchema={profileSchema}
                >
                    {(handlers) => (
                        <FormWrapper>
                            <WrapeprInput>
                                <Input autoComplete="off" onBlur={handlers.handleBlur} placeholder='Имя фамилия' name='fullname' type="text" onChange={handlers.handleChange} />
                                <Error name="fullname" component="span" className="error" />
                            </WrapeprInput>
                            <WrapeprInput>
                                <Input autoComplete="off" onBlur={handlers.handleBlur} placeholder='Почта' name='email' type="email" onChange={handlers.handleChange} />
                                <Error name="email" component="span" className="error" />
                            </WrapeprInput>
                            <WrapeprInput>
                                <InputLink autoComplete="off" onBlur={handlers.handleBlur} placeholder='Ссылка на сайт' name='linkWebsite' type="text" onChange={handlers.handleChange} />
                                <Error name="linkWebsite" component="span" className="error" />
                            </WrapeprInput>
                            <ButtonSubmit style={{ marginTop: 20}} title="Сохранить" value={!handlers.isValid || !handlers.dirty} />
                        </FormWrapper>
                    )}
                </Formik>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    gap: 102px;
    align-items: flex-start;
    position: relative;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 50px;
    }
`

const ProfileImage = styled.div`
    @media ${device.laptop} {
        margin-top: 107px;
        margin-right: auto;
    }
`

const FormWrapper = styled.div`
    max-width: 637px;
    width: 100%;
    @media ${device.tablet} {
        width: 100%;
    }
`

const WrapeprInput = styled.div`
    max-width: 637px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    margin-bottom: 10px;
    border-bottom: ${({ theme }) => theme.darkGrey} 1px solid; 
`

const Input = styled(Field)`
    background-color: ${({ theme }) => theme.black};
    border: none;
    color: ${({ theme }) => theme.white};
    width: 100%;
    height: 86px;
    border: none;
    outline: none;
    font-size: 48px;
    line-height: 96.3%;
    text-align: center;
    border-radius: 20px;
    font-family: 'Gilroy';
    font-weight: 600;
    ::placeholder {
        color: ${({ theme }) => theme.placeholder};
        text-align: center;
        font-size: 48px;
        line-height: 96.3%;
        @media ${device.tablet} {
            font-size: 34px;
        }
    }

    @media ${device.tablet} {
        font-size: 34px;
        height: 50px;
    }
`

const InputLink = styled(Input)`
    color: ${({ theme }) => theme.link} !important;
`

const Error = styled(ErrorMessage)`
    color: ${({ theme }) => theme.red};
    bottom: -23px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    white-space: nowrap;
    @media ${device.tablet} {
        position: absolute;
    }
`


