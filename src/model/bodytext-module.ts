import { ApiModelProperty } from "@nestjs/swagger";
import { WordPressPostModule } from "./wordpress-post-module";
import uuid = require("uuid");
import { ContainerSize } from "src/enums/container-size";
import { ContainerAlignment } from "src/enums/container-alignment";

export class BodyTextModule extends WordPressPostModule {
  @ApiModelProperty()
  public html: string;

  @ApiModelProperty()
  public containerSize: "full" | "large" | "medium" | "small";

  @ApiModelProperty()
  public containerAlignment: "left" | "center" | "right";
}

export const generateBodyTextModule = (): BodyTextModule => {
  return {
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
        <meta charset="UTF-8"/>
		<meta http-equiv="Content-Type" content="text/plain; charset=utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta name="MobileOptimized" content="320" />
        <meta name="HandHeldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
            table {
            	border-collapse:collapse !important	
            }
            /*MOBILE*/
            @media only screen and (max-width: 480px){
                .tableFull, .tableHAlf {
                	width:320px !important;
                }
            }
            /*DESKTOP*/
            @media only screen and (min-width: 481px){
            	.tableFull {
                    width:620px !important;
                }
                .tableHAlf {
                    width:310px !important;
                }
            }
        </style>
        <!--[if mso]>
            <style type="text/css">
				.tableFull {
                    width:620px !important;
            	}
				.tableHAlf {
                    width:305px !important;
                }
            </style>
        <![endif]-->
        <title>Table Template</title>
	</head>
	<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" bgcolor="#54565e" style="height:100%; width:100%; min-width:100%; margin:0; padding:0; background-color:#54565e;">
    	<center>
            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center" bgcolor="#54565e">
                        <table width="620" cellspacing="0" cellpadding="0" border="0" bgcolor="yellow" align="center" style="min-width:310px;" class="tableFull">
                            <tr>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td width="310">
                                    <table width="310" cellspacing="0" cellpadding="0" border="0" bgcolor="green" align="left" style="min-width:310px;" class="tableHAlf">
                                        <tr>
                                            <td>2</td>
                                        </tr>
                                    </table>
                                    <table width="310" cellspacing="0" cellpadding="0" border="0" bgcolor="blue" style="min-width:310px;" class="tableHAlf">
                                        <tr>
                                            <td>3 </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </center>
	</body>
</html>`,
    id: uuid(),
    name: "bodyTextModule",
    bottomMargin: "0px",
    topMargin: "0px",
    containerSize: "medium",
    containerAlignment: "center"
  };
};
