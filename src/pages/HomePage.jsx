import { useDispatch } from "react-redux"
import HeroSection from "../components/HeroSection/HeroSection"
import StoresSection from "../components/StoresSection/StoresSection"
import InfoSection from "../InfoSection/InfoSection"
import { useEffect } from "react"
import { fetchMedicineStores } from "../redux/medicine-stores/operation"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import { fetchReviews } from "../redux/reviews/operation"
import ReviewsSection from "../components/ReviewsSection/ReviewsSection"

const HomePage = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMedicineStores())
       dispatch(fetchReviews())
    }, [dispatch])

  return (
    <>
          <HeroSection />
          <InfoSection />
          <StoresSection />
          <DescriptionSection />
          <ReviewsSection/>
    </>
  )
}

export default HomePage
