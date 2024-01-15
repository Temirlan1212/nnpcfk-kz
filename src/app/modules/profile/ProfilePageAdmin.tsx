import { PageTitle } from '../../../_metronic/layout/core'
import { ProfileHeaderAdmin } from './ProfileHeaderAdmin'
import { Account } from './components/account/Account'

const ProfilePageAdmin = () => (
	<>
		<ProfileHeaderAdmin />
		<PageTitle description='Данные вашего аккаунта'>Мой профиль</PageTitle>
		<Account />
	</>
)

export default ProfilePageAdmin
