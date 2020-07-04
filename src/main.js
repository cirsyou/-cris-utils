import * as _envUtils from './_env'
import * as _Utils from './_utils'

export default {
  isAndroid: _envUtils.isAndroid(),
  isIOS: _envUtils.isIos(),
  formateUrl: _Utils.formateQuery,
  formatDate: _Utils.formatDate
}