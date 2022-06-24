import React from 'react'
import GoldCard from './cards/GoldCard'
import PlatinumCard from './cards/PlatinumCard'

export type MemberCardType = 'gold' | 'platinum'

interface MemberCardProps {
  type: MemberCardType
}

export const MemberCard = ({ type }: MemberCardProps) => {
  switch (type) {
    case 'gold': {
      return <GoldCard />
    }
    case 'platinum': {
      return <PlatinumCard />
    }
  }
}
