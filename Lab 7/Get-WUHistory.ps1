﻿Get-WUHistory | Where-Object {$_.Title -match "KB4489*"} | Select-Object *|ft