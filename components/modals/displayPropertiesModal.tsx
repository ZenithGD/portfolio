import { Tab, Fieldset, Checkbox, Dropdown, Tabs, Input } from '@react95/core'
import React from 'react'
import Image from 'next/image'

type Props = {}

function DisplayPropertiesModal({ }: Props) {
  return (
    
    <div className='flex justify-center'>
      <div>
        <Tabs width="475px" defaultActiveTab="General">
          <Tab title="General">
            <Fieldset legend="Logon validation" style={{
              marginBottom: '1em'
            }}>
              <Checkbox readOnly checked>
                Log on to Windows NT domain
              </Checkbox>
              <br />
              <p style={{
                marginLeft: 22,
                marginTop: 4
              }}>
                When you log on, your password will be verified in a Windows NT
                domain.
              </p>
              <p style={{
                marginBottom: 4,
                marginLeft: 22
              }}>Windows NT domain:</p>
              <Input style={{ width: 180, marginLeft: 22 }} />
            </Fieldset>

            <Fieldset legend="Network logon options">
              <Checkbox>Quick logon</Checkbox>
              <p style={{
                marginBottom: 4,
                marginLeft: 22,
                marginTop: 4
              }}>
                Windows logs you onto the network, but network drives are not
                reconnected until you use them.
              </p>
              <Checkbox>Logon and restore network connections</Checkbox>
              <p style={{
                marginBottom: 4,
                marginLeft: 22,
                marginTop: 4
              }}>
                When you log onto the network, Windows verifies that each network
                drive is ready to use.
              </p>
            </Fieldset>
          </Tab>
          <Tab title="Appearance">
            <p style={{
              marginTop: 0,
              marginBottom: '1.6em'
            }}>
              If you have problems with this program and it worked correctly on an
              earlier version of Windows, select the compatibility mode that matches
              that earlier version.
            </p>

            <div className='z-10'>
              <div className='flex justify-center relative z-10'>
                {/* Frame on which the background will be previewed. */}
                <Image
                  src="/assets/images/pictures/bgselectpreview.webp"
                  alt="Computer background preview"
                  width={225} height={200}
                  className='z-20'
                />
                {/* Preview the background here */}
                <div className='absolute top-[20px] left-[140px] w-[180px] h-[130px] bg-[#008080] -z-10'>

                </div>
              </div>
            </div>

            <Fieldset legend="Compatibility mode" style={{
              marginBottom: '1.6em'
            }}>
              <Checkbox readOnly checked>
                Run this program in compatibility mode for:
              </Checkbox>
              <Dropdown style={{
                width: 200
              }} options={['Windows 95']} />
            </Fieldset>

            <Fieldset legend="Display Settings">
              <Checkbox>Run in 256 colors</Checkbox>
              <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
              <Checkbox>Disable visual themes</Checkbox>
            </Fieldset>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>
              Learn more about <a href="#">program compatibility.</a>
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default DisplayPropertiesModal