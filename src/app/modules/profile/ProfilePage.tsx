import { PageTitle } from '../../../_metronic/layout/core'
import { ProfileHeader } from './ProfileHeader'
import { Account } from './components/account/Account'

const ProfilePage = () => (
	<>
		<ProfileHeader />
		<PageTitle description='Данные вашего аккаунта'>Мой профиль</PageTitle>
		<Account />
	</>
)

export default ProfilePage
