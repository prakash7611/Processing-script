 <script type="text/javascript">
             //sankar 11/05/2012
             var prm = Sys.WebForms.PageRequestManager.getInstance();
             prm.add_initializeRequest(prm_InitializeRequest);
             prm.add_endRequest(prm_EndRequest);
             
             function prm_InitializeRequest(sender, args) 
             {
                var Iframe= $get('DummyFrame')
                Iframe.style.visibility='visible';
                Iframe.style.filter='alpha(opacity=10)';
                Iframe.style.position='absolute';
                Iframe.style.width=screen.width;
                Iframe.style.top='0px';
                Iframe.style.left='0px';
                Iframe.style.width= '100%';
                Iframe.style.height= '100%';
                Iframe.style.height=document.forms[0].offsetHeight;
                Iframe.style.zIndex=999998;
                Iframe.style.display='block';
                
                var panelProg = $get('divImage');
                panelProg.style.display = '';
             }
 
             function prm_EndRequest(sender, args) 
             {
                var Iframe=document.getElementById('DummyFrame');
                Iframe.style.visibility='hidden';
                var panelProg = $get('divImage');
                panelProg.style.display = 'none';
             }
    </script>

    <div id="divImage" style="display: none; position: absolute; width: 100%; text-align: center;
        top: 400px;">
        <asp:Image ID="img1" runat="server" ImageUrl="~/Images/progress.gif" />
        Processing...
    </div>
    <iframe id="DummyFrame" style="visibility: hidden; display: none;"></iframe>
