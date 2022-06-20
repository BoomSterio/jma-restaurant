import React from 'react'
import GoldCard from './cards/GoldCard'

enum memberCardType {
  gold = 'gold',
  platinum = 'platinum',
}

interface MemberCardProps {
  type?: memberCardType
}

export const MemberCard = ({ type }: MemberCardProps) => {
  switch (type) {
    case memberCardType.gold: {
      return <GoldCard />
    }
    case memberCardType.platinum: {
      return <GoldCard />
    }
    default: {
      return <GoldCard />
    }
  }
}
