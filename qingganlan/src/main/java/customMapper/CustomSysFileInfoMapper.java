package customMapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import po.SysFileInfo;
import po.SysFileInfoExample;

public interface CustomSysFileInfoMapper {


int upLoadFile(Map record);
    
int modifyHeadImg(Map record);

int filesUnused(Map map);

int filesUsed(Map map);
   
   

}